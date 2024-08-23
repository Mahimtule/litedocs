import React from "react";

const page = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="p-5 w-[325px] sm:w-fit bg_secondary flex flex-col justify-center items-center rounded-md gap-3">
        <div className="text-center sm:w-[400px]">
          <h1 className="mb-2 text-xl font-medium">Welcome to LiteDocs</h1>
          <p className="text-muted-foreground">
            your goto platform for creating awesome text documents
          </p>
        </div>
        <div>
          <button className="btn btn_dark flex justify-center items-center gap-2">
            <img src="google.svg" alt="google-logo" className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default page;
