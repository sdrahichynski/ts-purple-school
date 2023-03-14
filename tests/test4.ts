
interface IPayment {
	sum: number;
	from: ID;
	to: ID;
}

enum PaymentStatus {
	Success = 'success',
	Failed = 'failed',
}

interface IPaymentRequest extends IPayment { }

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponseSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponseFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type IResponse = IResponseSuccess | IResponseFailed;

function isResponseSuccess(res: IResponse): res is IResponseSuccess {
	return res.status === PaymentStatus.Success
}

function processResponse(res: IResponse): number {
	if (isResponseSuccess(res)) {
		return res.data.databaseId;
	}

	throw new Error(res.data.errorMessage);
}
