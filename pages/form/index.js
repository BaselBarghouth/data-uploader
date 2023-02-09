import classNames from "classnames";
const errors = ''
const Form = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white font-default">
      <main className="w-full max-w-xl">
    <form >
      <div className="my-10 flex-col col flex gap-y-10">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Upload data here please
          </label>
          <input
            className={classNames(
              `block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm`,
              errors.email && "border-error-500",
            )}
            id="email"
            type="file"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-error-600">
              {errors.email?.message}
            </p>
          )}
       <button
    className={classNames(
      "flex h-12 w-full place-content-center place-items-center gap-x-3 rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none enabled:hover:bg-primary-700"
    )}
  >
    Submit
  </button>
        </div>
    </form>
    </main>
    </div>
  );
};

export default Form;
