import { Button } from "@/shared/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  time: z.string().nonempty("Waktu wajib disi"),
});

interface IProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AddScheduleForm({ open, onOpenChange }: IProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      time: "",
    },
  });

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);
    onOpenChange(false);
  }

  useEffect(() => {
    if (!open) {
      form.reset({ time: "" });
    }
  }, [form, open]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Tambah Jadwal pakan</DialogTitle>
        <DialogDescription></DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-3"
        >
          <FormField
            control={form.control}
            name="time"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Jadwal pakan</FormLabel>
                <FormControl>
                  <Input type="time" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter className="grid grid-cols-[70px_70px] gap-2  boder border-black">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="w-max">
                Batal
              </Button>
            </DialogClose>
            <Button type="submit" variant="default" className="w-max">
              Tetapkan
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
