import * as React from "react";
import {
  Html,
  Button,
  Tailwind,
  Img,
  Container,
} from "@react-email/components";
import { url } from "inspector";
import { Logo } from "../Logo";

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
              <div className="bg-blue-950 rounded-xl p-6">
                <Container style={{ margin: "0 auto", width: "fit-content" }}>
                  <Img
                    src="https://github.com/PriyobrotoKar/Trenlines/blob/main/public/logo.png?raw=true"
                    alt="Trenlines Logo"
                    className="w-14"
                  />
                </Container>
              </div>
              <h1 className="text-3xl font-bold mt-6 text-black">
                Trenlines Trading Journal
              </h1>
              <p className="text-gray-600 text-sm ">
                The Most COMPREHENSIVE Trading Journal in the Game!
              </p>
            </header>

            <section style={{}}>
              <p className="text-gray-800 leading-7 text-center">
                This journal will give you detailed statistics and massively
                speed up your trading journey!
              </p>
              <Container style={{ margin: "0 auto", width: "fit-content" }}>
                <a href="https://docs.google.com/spreadsheets/d/12rPFoSTjDrL7ag0nila3OXg83ZHbdv3WYtr7sCv91fc/edit?gid=1729010657#gid=1729010657">
                  <button className="bg-green-400 border mx-auto border-green-700 w-fit  cursor-pointer rounded-full text-lg px-6 py-2">
                    Get Journal
                  </button>
                </a>
              </Container>
            </section>

            <footer className="text-center mt-12 border-t pt-8 border-gray-300">
              <p className="text-sm text-gray-600">
                © 2024 Trenlines. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </Tailwind>
    </Html>
  );
}

export default Email;
