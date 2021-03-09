import { FormEvent, useEffect, useState } from "react";
import ReactLoading from "react-loading";

import api from "../api";

import styles from "../styles/components/ShortenSection.module.css";

interface LinkTips {
  error_code: number,
  result: {
    code: string,
    full_short_link3: string,
    original_link: string,
  }
}

export default function ShortenSection() {
  const [newLink, setNewLink] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [existError, setExisterror] = useState(false);
  const [loading, setLoading] = useState(false);

  const [links, setLinks] = useState<LinkTips[]>([])

  useEffect(() => {
    const storagedLinks = localStorage.getItem('@shrtco:links');

    if (storagedLinks) {
      setLinks(JSON.parse(storagedLinks));
      return;
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@shrtco:links', JSON.stringify(links));
  }, [links]);

  async function handleAddShortedLink(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!newLink) {
      setErrorMessage("Please add a link");
      setExisterror(true);

      return;
    }

    try {
      setLoading(true);

      let validNewLink = newLink;
      let verifyLink = validNewLink.substring(0, 8);

      if (verifyLink === "https://") {
        validNewLink = validNewLink.substr(8);
      }

      verifyLink = verifyLink.substr(0, 7);

      if (verifyLink === "http://") {
        validNewLink = validNewLink.substr(7);
      }

      const response = await api.get<LinkTips>(validNewLink);

      const linkData = response.data;

      setLinks([...links, linkData]);
      setLoading(false);
      setExisterror(false);
    } catch (err) {
      setLoading(false);
      setExisterror(true);
      setErrorMessage("Invalid URL or rate limit reached. Try again later.");

      console.log(err);
      return;
    }
  }

  function copyToClipboard(e) {
    navigator.clipboard.writeText(e.target.previousSibling.textContent);
    e.target.textContent = "Copied!";
    e.target.style.background = "var(--bgDarkViolet)";
    setTimeout(() => {
      e.target.textContent = "Copy";
      e.target.style.background = "var(--buttonBgColor)";
    }, 2000);
  }

  return (
    <section>
      <div className={styles.container}>
        <form
          onSubmit={handleAddShortedLink}
        >
          <input
            className={existError ? styles.inputShorterError : styles.inputShorter}
            placeholder="Shorten a link here..."
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
          <button type="submit">{ loading ? (
            <ReactLoading type={"bubbles"} width={50} height={50} />
          ) : "Shorten it!" }
          </button>
        </form>

        {existError && (
          <div>
            <label>{errorMessage}</label>
          </div>
        )}
        
      </div>

      {links.map(link => (
        <div key={link.result.code} className={styles.linkShortedDiv}>
          <p>{link.result.original_link}</p>

          <div>
            <a href={link.result.full_short_link3} target="_blank">{link.result.full_short_link3}</a>
            <button onClick={(e) => copyToClipboard(e)} type="button">Copy</button>
          </div>
        </div>
      ))}
    </section>
  );
}