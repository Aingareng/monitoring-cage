import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import { EyeIcon, EyeClosedIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("Email wajib diisi")
    .email({ message: "Email tidak valid" }),
  password: z
    .string()
    .min(8, "Kata sandi minimal harus terdiri dari 8 karakter"),
});

export default function LoginPage() {
  const [isShow, showPassword] = useState(false);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(value: z.infer<typeof formSchema>) {
    console.log(value);
    navigate("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="box-border  max-w-sm p-6 mx-1.5  sm:max-w-md md:w-[450px]">
          <CardHeader>
            <CardTitle>
              <h1>Login</h1>
            </CardTitle>
            <CardDescription>
              Silakan masukkan email dan kata sandi anda untuk melanjutkan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Cth : JohnDoe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kata sandi</FormLabel>
                  <div className="flex items-center">
                    <FormControl>
                      <Input
                        placeholder="Masukan kata sandi"
                        type={isShow ? "text" : "password"}
                        {...field}
                      />
                    </FormControl>
                    <Button
                      variant="ghost"
                      size="icon"
                      type="button"
                      className="border-none shadow-none p-0"
                      onClick={() => showPassword((prev) => !prev)}
                    >
                      {isShow ? (
                        <EyeClosedIcon size={48} />
                      ) : (
                        <EyeIcon size={48} />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-primary">
              Masuk
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
