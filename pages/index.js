import { useState } from "react";
import Layout from "../components/layout.js";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pitch, setPitch] = useState(440);
  function handleChange(e) {
    setPitch(e.target.value);
  }

  return (
    <Layout home>
      <h1 className={styles.title}>절대음감 챌린지</h1>
      <div className={styles.grid}>
        <form
          className={styles.card}
          action="/challenge"
          style={{ textAlign: "center" }}
        >
          <label style={{ display: "block" }}>
            Pitch:
            <input
              type="number"
              step="1"
              name="pitch"
              value={pitch}
              onChange={handleChange}
              style={{ width: "50px", textAlign: "right", margin: "0 0.5em" }}
            />
            ㎐ A
          </label>
          <button type="submit" style={{ marginTop: "1em" }}>
            시작하기
          </button>
        </form>
      </div>
    </Layout>
  );
}
