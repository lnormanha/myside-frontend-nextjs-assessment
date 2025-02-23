import styles from "./page.module.css";
import { Text } from "@/components/core/Text";
import { Button } from "@/components/core/Button";
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Text as="h1" weight="bold" color="#FFF" align="center">
          Hello World
        </Text>
        <Button size="large" variant="outline">
          Click me
        </Button>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
