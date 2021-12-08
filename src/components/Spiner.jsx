import { ImSpinner10 } from 'react-icons/im';
import style from './Spinner.module.css'
export function Spiner() {
    return (
        <div className={style.spinner}>
            <ImSpinner10  size={60}  className={ style.spinning }/>
        </div>
    )
}
