import PayPalButton from "@/app/components/PayPal/PayPalButton"

export default function PayPage() {
  return (
    <>
      <div>Pay Page</div>
      <PayPalButton amount={65} />
    </>
  )
}
