'use client'
import { Input } from "@/components/ui/input";
import { PriceFood } from "@/components/ui/priceFood";
import { Textarea } from "@/components/ui/textarea";
import { payLoadFood } from "@/interfaces/food-form.interface";
import { foodSchemaForm } from "@/schemas/food.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../ui/button";

export const FoodForm = ({ setShowFoodDialog, name }: any) => {
  const [price, setPrice] = useState(12);

  const { register, handleSubmit, formState: { errors } } = useForm<payLoadFood>(
    {
      resolver: zodResolver(foodSchemaForm)
    }
  );

  const handlePriceChange = (newPrice: number) => {
    setPrice(newPrice);
  };

  const onSubmit = async (data: payLoadFood) => {
    const validData = { ...data, userId: "test", price: price.toString() };
    console.log(validData);
    setShowFoodDialog(false)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="absolute z-50  gap-8 mt-4 bg-gray-200 p-6 max-w-[500px] rounded-md top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex flex-col gap-4 h-full w-full">
        <span className="underline absolute top-5 right-5 text-lg cursor-pointer" onClick={() => { setShowFoodDialog(false) }}>X</span>
        <Input {...register("name")} label="Nome do prato *" placeHolder="Insira um nome..." className="h-14 px-6 bg-gray-300" />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        <PriceFood onChange={handlePriceChange} label="Valor do prato" />
        <Textarea {...register("description")} placeholder="Insira uma descrição..." name="Descrição(Opcional)" />
        <Button type="submit" className="h-10 w-full">{name}</Button>
      </div>
    </form>
  );
};
