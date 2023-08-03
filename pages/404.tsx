import styles from "@/styles/Error.module.css";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    // Redirect to the Play Store URL for Android devices
    window.location.href =
      "https://play.google.com/store/apps/details?id=id.meteor.alfamind&pli=1";
    // return null; // Return null to prevent rendering anything on the page
  });
  return (
    <div className={styles.bg_error}>
      <div>
        <h1 className={styles.bg_404}>404</h1>
        <div className={styles.wrap_text}>
          <h2 className={styles.text}>This page could not be found.</h2>
        </div>
      </div>
    </div>
  );
}
