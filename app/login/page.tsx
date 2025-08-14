"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { LOGIN_SCHEMAS } from "@/constants/schemas";
import { saveAPIToken } from "@/utils/manageAPIToken";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: yupResolver(LOGIN_SCHEMAS),
    mode: "onChange",
    defaultValues: {
      api_token: ""
    }
  });

  const onSubmit = async (data: { api_token: string }) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve =>
        setTimeout(e => {
          console.log("data", data?.api_token);
          saveAPIToken(data.api_token);
          resolve(e);
        }, 1000)
      );
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-primary p-3 rounded-xl">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Admin Portal</h1>
          <p className="text-muted-foreground">Sign in to manage certificates</p>
        </div>

        {/* Login Form */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <p className="text-sm text-muted-foreground">Enter your Api token to continue</p>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="api_token"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>API token</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="API token" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button type="submit" className="w-full" disabled={!form.formState.isValid || isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Signing In...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Protected by .{" "}
            <Button variant="link" className="px-0 h-auto text-xs font-normal">
              Privacy Policy
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
