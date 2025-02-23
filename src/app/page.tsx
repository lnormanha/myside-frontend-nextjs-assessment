import styles from "./page.module.css";
import { Text } from "@/components/core/Text";
import { Button } from "@/components/core/Button";
import { ProductCard } from "@/components/custom/ProductCard";
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
        <ProductCard
          title="Product 1"
          price={100}
          image="https://storage.googleapis.com/fir-auth-1c3bc.appspot.com/1692947383286-714WUJlhbLS._SL1500_.jpg"
          description="Product 1 description"
        />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
