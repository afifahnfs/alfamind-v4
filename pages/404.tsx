import styles from "@/styles/Error.module.css";
import { useEffect } from "react";

export default function Custom404() {
  useEffect(() => {
    // Redirect to the Play Store URL for Android devices
    window.location.href =
      "https://play.google.com/store/apps/details?id=id.meteor.alfamind&pli=1";
    // return null; // Return null to prevent rendering anything on the page
  });
  return <div className={styles.bg_error}></div>;
}
