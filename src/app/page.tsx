import styles from "./page.module.css";
import { ProductCard } from "@/components/custom/ProductCard";
import { ProductService } from "@/services/ProductService";
import { FilterBar } from "@/components/FilterBar";
import { Text } from "@/components/core/Text";
import { IGetProductsResponse } from "@/services/ProductService/types";
import { Header } from "@/components/custom/Header";
const productService = new ProductService();

interface HomeProps {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    type?: string;
    sort?: string;
    search?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { page, type, sort, search, limit } = await searchParams;
  const pageNumber = page ? parseInt(page) : 1;
  const limitNumber = limit ? parseInt(limit) : 10;

  let productsResponse: IGetProductsResponse;

  if (type) {
    productsResponse = await productService.getProductsByCategory({
      page: pageNumber,
      limit: limitNumber,
      sort: sort || "desc",
      type: type || "",
    });
  } else {
    productsResponse = await productService.getProducts({
      page: pageNumber,
      limit: limitNumber,
      sort: sort || "desc",
    });
  }

  const categoriesResponse = await productService.getProductsCategories();

  return (
    <div className={styles.page}>
      <Header title="MySide Fake Store" />
      <main className={styles.main}>
        <FilterBar
          categories={categoriesResponse.categories || []}
          selectedCategory={type || ""}
          selectedSort={sort || ""}
          search={search || ""}
        />
        <div className={styles["products-container"]}>
          {productsResponse.products.length > 0 ? (
            productsResponse.products
              .filter((product) =>
                product.title
                  .toLowerCase()
                  .includes(search?.toLowerCase() || "")
              )
              .map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                />
              ))
          ) : (
            <Text>No products found</Text>
          )}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
