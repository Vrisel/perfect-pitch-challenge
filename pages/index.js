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
        <div className={styles.card}>
          <label style={{ display: "block" }}>
            기준음
            <input
              type="number"
              step="1"
              value={pitch}
              onChange={handleChange}
              style={{ width: "70px" }}
            />
            Hz A
          </label>
          <div
            style={{
              position: "relative",
              border: "1px solid black",
              margin: "10px",
              lineHeight: "3em",
              height: "3em",
              verticalAlign: "middle",
              textAlign: "center",
              color: "white",
              backgroundColor: "gray",
              cursor: "pointer",
            }}
          >
            <Link href={`/challenge?pitch=${pitch}`} passHref>
              <strong>시작하기</strong>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
