import CustomEdge from "@/components/CustomEdge";
import PaymentCountry from "@/components/PaymentCountry";
import PaymentInit from "@/components/PaymentInit";
import PaymentProvider from "@/components/PaymentProvider";
import PaymentProviderSelect from "@/components/PaymentProviderSelect";

export const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect,
};

export const edgeTypes = {
  customEdge: CustomEdge,
};
