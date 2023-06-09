import type { ColorName } from '../../../globals/colors';
import styles from './pupil.module.scss';
import { Box } from '../../common/box/box';

export interface PupilProps {
    color?: ColorName;
}

export const Pupil = ({ color = 'aeroBlue' }: PupilProps) => {
    return (
        <div className={styles.pupils} data-pupil>
            <Box color="charcoalBlack" className={styles.pupil} />
            <Box color={color} className={styles.pupil} />
        </div>
    );
};
