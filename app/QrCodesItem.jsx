import QrCodeProjectsIcon from "./Icons/QrCodeProjectsIcon";

const QrCodesItem = (props) => {
    return (
        <div className="card-right-section0-qr-codes-qr flex flex-col w-fit">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <div className="card-right-section0-qr-codes-qr-icon">
                    <props.icon />
                </div>
                <div className="card-right-section0-qr-codes-qr-url text-black text-center">
                    <h3 className="text-xs font-bold">{props.title}</h3>
                </div>
            </a>
        </div>
    );
};

export default QrCodesItem;