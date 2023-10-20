export interface BillingRequest {
  actions?: BillingRequestAction[];
  created_at?: string;
  fallback_enabled?: boolean;
  id?: string;
  links?: BillingRequestLinks;
  mandate_request?: BillingRequestMandateRequest;
  metadata?: JsonMap;
  payment_request?: BillingRequestPaymentRequest;
  purpose_code?: BillingRequestPurposeCode;
  resources?: BillingRequestResources;
  status?: BillingRequestStatus;
}

export interface BillingRequestCreateRequestLinks {
  creditor?: string;
  customer?: string;
  customer_bank_account?: string;
}
/** Type for a billingrequestcustomer resource. */
export interface BillingRequestCustomer {
  company_name?: string | null;
  email?: string | null;
  family_name?: string | null;
  given_name?: string | null;
  language?: string | null;
  metadata?: JsonMap;
  phone_number?: string | null;
}
/** Type for a billingrequestcustomerbillingdetail resource. */
export interface BillingRequestCustomerBillingDetail {
  address_line1?: string | null;
  address_line2?: string | null;
  address_line3?: string | null;
  city?: string | null;
  country_code?: string | null;
  danish_identity_number?: string | null;
  ip_address?: string | null;
  postal_code?: string | null;
  region?: string | null;
  swedish_identity_number?: string | null;
}
export enum BillingRequestAccountType {
  Savings = "savings",
  Checking = "checking",
}
export enum BillingRequestNotificationType {
  Email = "email",
}
/** Type for a billingrequestaction resource. */
export interface BillingRequestAction {
  available_currencies?: string[];
  bank_authorisation?: BillingRequestActionBankAuthorisation;
  collect_customer_details?: BillingRequestActionCollectCustomerDetails;
  completes_actions?: string[];
  institution_guess_status?: BillingRequestActionInstitutionGuessStatus;
  required?: boolean;
  requires_actions?: string[];
  status?: BillingRequestActionStatus;
  type?: BillingRequestActionType;
}
/** Type for a billingrequestactionavailablecurrencies resource. */
export interface BillingRequestActionAvailableCurrencies {
  currency?: string;
}
/** Type for a billingrequestactionbankauthorisation resource. */
export interface BillingRequestActionBankAuthorisation {
  adapter?: BillingRequestActionBankAuthorisationAdapter;
  authorisation_type?: BillingRequestActionBankAuthorisationAuthorisationType;
}
export enum BillingRequestActionBankAuthorisationAdapter {
  OpenBankingGatewayPis = "open_banking_gateway_pis",
  PlaidAis = "plaid_ais",
  OpenBankingGatewayAis = "open_banking_gateway_ais",
  BankidAis = "bankid_ais",
  BankPayRecurring = "bank_pay_recurring",
}
export enum BillingRequestActionBankAuthorisationAuthorisationType {
  Payment = "payment",
  Mandate = "mandate",
}
/** Type for a billingrequestactioncollectcustomerdetails resource. */
export interface BillingRequestActionCollectCustomerDetails {
  default_country_code?: string;
  incomplete_fields?: BillingRequestActionCollectCustomerDetailsIncompleteFields;
}
/** Type for a billingrequestactioncollectcustomerdetailsincompletefields resource. */
export interface BillingRequestActionCollectCustomerDetailsIncompleteFields {
  customer?: string[];
  customer_billing_detail?: string[];
}
export enum BillingRequestActionInstitutionGuessStatus {
  NotNeeded = "not_needed",
  Pending = "pending",
  Failed = "failed",
  Success = "success",
}
export enum BillingRequestActionStatus {
  Pending = "pending",
  Completed = "completed",
}
export enum BillingRequestActionType {
  ChooseCurrency = "choose_currency",
  CollectAmount = "collect_amount",
  CollectCustomerDetails = "collect_customer_details",
  CollectBankAccount = "collect_bank_account",
  BankAuthorisation = "bank_authorisation",
  ConfirmPayerDetails = "confirm_payer_details",
  SelectInstitution = "select_institution",
}
/** Type for a billingrequestlinks resource. */
export interface BillingRequestLinks {
  bank_authorisation?: string;
  creditor?: string;
  customer?: string;
  customer_bank_account?: string;
  customer_billing_detail?: string;
  mandate_request?: string;
  mandate_request_mandate?: string;
  organisation?: string;
  payment_request?: string;
  payment_request_payment?: string;
}
/** Type for a billingrequestmandaterequest resource. */
export interface BillingRequestMandateRequest {
  authorisation_source?: BillingRequestMandateRequestAuthorisationSource;
  constraints?: BillingRequestMandateRequestConstraints | null;
  currency?: string;
  description?: string | null;
  links?: BillingRequestMandateRequestLinks;
  metadata?: JsonMap;
  scheme?: string | null;
  verify?: BillingRequestMandateRequestVerify;
}
export enum BillingRequestMandateRequestAuthorisationSource {
  Web = "web",
  Telephone = "telephone",
  Paper = "paper",
}
/** Type for a billingrequestmandaterequestconstraints resource. */
export interface BillingRequestMandateRequestConstraints {
  end_date?: string;
  max_amount_per_payment?: number;
  periodic_limits?: BillingRequestMandateRequestConstraintsPeriodicLimit[];
  start_date?: string;
}
/** Type for a billingrequestmandaterequestconstraintsperiodiclimit resource. */
export interface BillingRequestMandateRequestConstraintsPeriodicLimit {
  alignment?: BillingRequestMandateRequestConstraintsPeriodicLimitAlignment;
  max_payments?: number;
  max_total_amount?: number;
  period?: BillingRequestMandateRequestConstraintsPeriodicLimitPeriod;
}
export enum BillingRequestMandateRequestConstraintsPeriodicLimitAlignment {
  Calendar = "calendar",
  CreationDate = "creation_date",
}
export enum BillingRequestMandateRequestConstraintsPeriodicLimitPeriod {
  Day = "day",
  Week = "week",
  Month = "month",
  Year = "year",
  Flexible = "flexible",
}
/** Type for a billingrequestmandaterequestlinks resource. */
export interface BillingRequestMandateRequestLinks {
  mandate?: string;
}
export enum BillingRequestMandateRequestVerify {
  Minimum = "minimum",
  Recommended = "recommended",
  WhenAvailable = "when_available",
  Always = "always",
}
/** Type for a billingrequestpaymentrequest resource. */
export interface BillingRequestPaymentRequest {
  amount?: string;
  app_fee?: string | null;
  currency?: string;
  description?: string | null;
  links?: BillingRequestPaymentRequestLinks;
  metadata?: JsonMap;
  scheme?: string | null;
}
/** Type for a billingrequestpaymentrequestlinks resource. */
export interface BillingRequestPaymentRequestLinks {
  payment?: string;
}
export enum BillingRequestPurposeCode {
  Mortgage = "mortgage",
  Utility = "utility",
  Loan = "loan",
  DependantSupport = "dependant_support",
  Gambling = "gambling",
  Retail = "retail",
  Salary = "salary",
  Personal = "personal",
  Government = "government",
  Pension = "pension",
  Tax = "tax",
  Other = "other",
}
/** Type for a billingrequestresources resource. */
export interface BillingRequestResources {
  customer?: BillingRequestResourcesCustomer;
  customer_bank_account?: BillingRequestResourcesCustomerBankAccount | null;
  customer_billing_detail?: BillingRequestResourcesCustomerBillingDetail;
}
/** Type for a billingrequestresourcescustomer resource. */
export interface BillingRequestResourcesCustomer {
  company_name?: string | null;
  created_at?: string;
  email?: string | null;
  family_name?: string | null;
  given_name?: string | null;
  id?: string;
  language?: string | null;
  metadata?: JsonMap;
  phone_number?: string | null;
}
/** Type for a billingrequestresourcescustomerbankaccount resource. */
export interface BillingRequestResourcesCustomerBankAccount {
  account_holder_name?: string;
  account_number_ending?: string;
  account_type?: BillingRequestResourcesCustomerBankAccountAccountType;
  bank_name?: string;
  country_code?: string | null;
  created_at?: string;
  currency?: string | null;
  enabled?: boolean;
  id?: string;
  links?: BillingRequestResourcesCustomerBankAccountLinks;
  metadata?: JsonMap;
}
export enum BillingRequestResourcesCustomerBankAccountAccountType {
  Savings = "savings",
  Checking = "checking",
}
/** Type for a billingrequestresourcescustomerbankaccountlinks resource. */
export interface BillingRequestResourcesCustomerBankAccountLinks {
  customer?: string;
}
/** Type for a billingrequestresourcescustomerbillingdetail resource. */
export interface BillingRequestResourcesCustomerBillingDetail {
  address_line1?: string | null;
  address_line2?: string | null;
  address_line3?: string | null;
  city?: string | null;
  country_code?: string | null;
  created_at?: string;
  danish_identity_number?: string | null;
  id?: string;
  ip_address?: string | null;
  postal_code?: string | null;
  region?: string | null;
  schemes?: string[];
  swedish_identity_number?: string | null;
}
export enum BillingRequestStatus {
  Pending = "pending",
  ReadyToFulfil = "ready_to_fulfil",
  Fulfilling = "fulfilling",
  Fulfilled = "fulfilled",
  Cancelled = "cancelled",
}

type JsonField = boolean | number | string | null;
export interface JsonArray extends Array<JsonField> {}

export interface JsonMap {
  [key: string]: JsonField | JsonMap | JsonArray;
}
