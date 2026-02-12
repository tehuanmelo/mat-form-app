import { OctagonAlert } from "lucide-react";

function ErrorAlert({msg}) {
    return (
        <div className="px-4 py-2 bg-red-300 rounded-md text-red-700 flex gap-3">
          <OctagonAlert /> <span>{msg}</span>
        </div>
    );
}

export default ErrorAlert;