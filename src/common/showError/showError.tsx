import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import CustomButton from "../CustomButton/CustomButton";

const ShowError = ({
  isOpen,
  handleClose
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
    <DialogContent className="w-[95vw] max-w-md mx-auto bg-black border border-zinc-400/60">
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <div className="mb-4 p-3 rounded-full bg-red-100 dark:bg-red-900/20">
          <X className="w-8 h-8 text-red-600 dark:text-red-400 " />
        </div>
        <h3 className="text-2xl font-semibold mb-2 text-white tracking-wide">
          Message Sending Failed
        </h3>
        <p className="text-base tracking-wide font-semibold text-zinc-400 mb-4">
          Sorry, I couldn&apos;t process your request. Please try again or
          contact me if the problem persists.
        </p>
        <div className="flex gap-3 mt-4">
          <CustomButton
            label="Close"
            variant="outline"
            size="lg"
            onClick={handleClose}
            className="w-40 text-base bg-black hover:opacity-95 text-white"
          />
          <CustomButton
            label="Try Again"
            variant="solid"
            size="lg"
            onClick={() => {
              handleClose();
            }}
            className="w-40 text-base bg-green-500 hover:opacity-95 hover:bg-green-600 text-white"
          />
        </div>
      </div>
    </DialogContent>
  </Dialog>
  );
};

export default ShowError;