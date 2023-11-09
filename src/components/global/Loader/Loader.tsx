import { Vortex } from "react-loader-spinner";
import styles from "./Loader.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

const Loader = () => {
    return (
        <div className={cn('loader__wrapper')}>
            <Vortex
                visible={true}
                height="120"
                width="120"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['#FC72F7', '#613C67', '#FF73FA', '#73757C', '#2C2C2F', '#181819']}
            />
        </div>
    )
}

export { Loader };