const EsewaButton = ({ amount, orderId }) => {
  return (
    <form
      action="https://uat.esewa.com.np/epay/main"
      method="POST"
    >
      <input type="hidden" name="amt" value={amount} />
      <input type="hidden" name="pdc" value="0" />
      <input type="hidden" name="psc" value="0" />
      <input type="hidden" name="txAmt" value="0" />
      <input type="hidden" name="tAmt" value={amount} />
      <input type="hidden" name="pid" value={orderId} />
      <input type="hidden" name="scd" value="EPAYTEST" />

      <input
        type="hidden"
        name="su"
        value="http://localhost:5173/payment-success"
      />
      <input
        type="hidden"
        name="fu"
        value="http://localhost:5173/payment-failure"
      />

      <button type="submit">
        eSewa
      </button>
    </form>
  )
}

export default EsewaButton
