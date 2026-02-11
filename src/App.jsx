import { Toaster } from "react-hot-toast";
import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <Form />
      </div>
    </>
  );
}
