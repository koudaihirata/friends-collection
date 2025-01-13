import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Schedule from "../../components/Schedule/Schedule";
import IconBox from "../../components/Iconbox/iconbox";
import Btn from "../../components/Btn/Btn";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function PackingPage() {
    const bag1Ref = useRef<HTMLImageElement>(null);
    const bag2Ref = useRef<HTMLImageElement>(null);

    return (
        <div className={styles.bg}>
            <div className={styles.elementBox}>
                <div className={styles.navWrap}>
                    <div>
                        <img src="/img/house.png" alt="リスの家" />
                    </div>
                    <h2>
                        <img src="/img/friend.png" alt="フレンドアイコン" />
                    </h2>
                </div>
                <div className={styles.scheduleWrap}>
                    <Schedule plase="Osaka" />
                </div>
                <div className={styles.PackingWrap}>
                    <IconBox bagRefs={[bag1Ref, bag2Ref]} />
                    <div className={styles.bagsBox}>
                        <Link to={"/bag/1"}>
                            <img
                                ref={bag1Ref}
                                src="/img/bag1.svg"
                                alt="カバン"
                            />
                        </Link>
                        <Link to={"/bag/2"}>
                            <img
                                ref={bag2Ref}
                                src="/img/bag2.svg"
                                alt="カバン"
                            />
                        </Link>
                    </div>
                </div>
                <div className={styles.BtnWrap}>
                    <Btn label="パッキング完了" />
                </div>
            </div>
        </div>
    );
}
