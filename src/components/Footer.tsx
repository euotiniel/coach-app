import Links from "next/link";

export default function Footer() {
  return (
    <footer className=" px-14 py-5">
      <div className="mt-9 sm:mb-3">
        <small className="text-base font-normal leading-none">
          2023 Built by{" "}
          <Links
            href="https://euotiniel.com/"
            className="border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          >
            @euotiniel
          </Links>{" "}
          . Hosted on{" "}
          <Links
            href="https://vercel.com/"
            className="border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          >
            Vercel
          </Links>{" "}
          . The source code is available on{" "}
          <Links
            href="https://github.com/euotiniel/"
            className="border-b transition-all text-gray-500 duration-500 hover:border-gray-500"
          >
            GitHub
          </Links>{" "}
        </small>
      </div>
    </footer>
  );
}
