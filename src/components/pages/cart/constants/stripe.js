const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_Bnttrw3t7SGBEpZCW8e36IqZ"
    : "pk_test_Bnttrw3t7SGBEpZCW8e36IqZ";

export default STRIPE_PUBLISHABLE;
