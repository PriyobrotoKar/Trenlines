import * as React from "react";
import { Html, Button, Tailwind } from "@react-email/components";
import { url } from "inspector";

export function Email() {
  return (
    <Html lang="en">
      <Tailwind>
        <div className="bg-gray-100 font-sans">
          <div
            style={{
              display: "none",
              overflow: "hidden",
              lineHeight: "1px",
              opacity: 0,
              maxHeight: 0,
              maxWidth: 0,
            }}
          >
            Here is your latest journal entry.
          </div>

          <div className="w-full max-w-2xl mx-auto p-8 bg-white shadow-lg">
            <header className="text-center mb-8">
              <div className="bg-blue-950 p-4 rounded-xl flex justify-center gap-4 items-center">
                <img
                  src={`https://raw.githubusercontent.com/PriyobrotoKar/Trenlines/0cf4193bb0e0d07a33b7d9e5e7c12b1a9027a308/public/logo.svg`}
                  alt="Journal Logo"
                  className="h-12 block"
                />
                <h2 className="text-2xl uppercase text-neutral-200 font-light">
                  Trenlines
                </h2>
              </div>
              <h1 className="text-3xl font-bold mt-6">Trading Journal</h1>
              <p className="text-gray-600 mt-2">
                Keeping you informed, inspired, and engaged
              </p>
            </header>

            <section className="mb-8 flex flex-col gap-8 items-center">
              <p className="text-gray-800 leading-7">
                Welcome to the latest edition of our monthly journal. We have
                curated a selection of articles, insights, and stories that we
                hope will inspire and engage you. Our team has worked hard to
                bring you the best content, and we hope you enjoy reading it as
                much as we enjoyed putting it together.
              </p>
              <button className="bg-green-400 border border-green-700 w-fit  cursor-pointer rounded-full text-lg px-6 py-2">
                Get Journal
              </button>
            </section>

            <footer className="text-center mt-12 border-t pt-8 border-gray-300">
              <p className="text-sm text-gray-600">
                © 2024 Trenlines. All rights reserved.
              </p>
              <p className="text-sm text-gray-600">
                <a
                  href="https://yourjournal.com/unsubscribe"
                  className="text-blue-500 underline"
                >
                  Unsubscribe
                </a>{" "}
                from these emails
              </p>
            </footer>
          </div>
        </div>
      </Tailwind>
    </Html>
  );
}

export default Email;
