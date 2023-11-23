import QrCodesItem from "./QrCodesItem";
import QrCodeProjectsIcon from "./Icons/QrCodeProjectsIcon";
import QrCodeLinktreeIcon from "./Icons/QrCodeLinktreeIcon";

const QrCodes = () => (
    <div className="card-right-section0-qr-codes opacity-50 flex justify-evenly my-[0.625rem]">
        <QrCodesItem title="My Website" icon={QrCodeProjectsIcon} url="https://www.yangxdev.com" />
        <QrCodesItem title="My Links" icon={QrCodeLinktreeIcon} url="https://linktr.ee/yang.xng" />
    </div>
);

export default QrCodes;
