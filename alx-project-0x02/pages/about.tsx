import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function About() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4">
        <h1 className="text-3xl font-bold">About Page</h1>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button size="small" shape="rounded-sm">
            Small Sm
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Md
          </Button>
          <Button size="large" shape="rounded-full">
            Large Full
          </Button>
        </div>
      </div>
    </>
  );
}

