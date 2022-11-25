import Head from "next/head";

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Alexander Martinez"></meta>
        <meta
          name="description"
          content={`Información sobre el pókemon ${title}"`}
        ></meta>
        <meta name="keywords" content={`${title}. pokemon, pokedex`}></meta>
      </Head>

      <main>{children}</main>
    </>
  );
};
