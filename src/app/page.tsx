import styles from "./page.module.css";
import { ProductCard } from "@/components/custom/ProductCard";
import { ProductService } from "@/services/ProductService";
import { FilterBar } from "@/components/FilterBar";
import { Text } from "@/components/core/Text";
import { IGetProductsResponse } from "@/services/ProductService/types";
const productService = new ProductService();

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    limit?: string;
    type?: string;
    sort?: string;
    search?: string;
  };
}) {
  const { page, type, sort, search, limit } = searchParams;
  let pageNumber = page ? parseInt(page) : 1;
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
      <FilterBar
        categories={categoriesResponse.categories || []}
        selectedCategory={type || ""}
        selectedSort={sort || ""}
        search={search || ""}
      />
      <main className={styles.main}>
        {productsResponse.products.length > 0 ? (
          productsResponse.products
            .filter((product) =>
              product.title.toLowerCase().includes(search?.toLowerCase() || "")
            )
            .map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                description={product.description}
              />
            ))
        ) : (
          <Text>No products found</Text>
        )}
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
