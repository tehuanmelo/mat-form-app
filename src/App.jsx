import { Toaster } from "react-hot-toast";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen flex justify-center bg-gray-50">
        <Form />
      </div>
    </>
  );
}
