/// <reference types="vite-plugin-svgr/client" />
import framePurpleBig from '../../../assets/images/framePurpleBig.png';
import framePurpleSmall from '../../../assets/images/framePurpleSmall.png';
import RsvpFrame from '../../../assets/images/rsvp-frame.svg?react';
import { DEFAULT_AOS } from '../../../constants';
import { postRsvp } from '../../../utils/api';
import { getInvitationName } from '../../../utils/common';
import { AnimationWrapper } from '../../AnimationWrapper/AnimationWrapper';
import { Button } from '../../Button/Button';
import { InputField } from '../../InputField/InputField';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { SelectField } from '../../SelectField/SelectField';
import { Title } from '../../Title/Title';
import s from './RSVP.module.scss';
import classNames from 'classnames';
import { useState } from 'react';
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useWatch,
} from 'react-hook-form';
import toast from 'react-hot-toast';

enum TotalEnum {
  one = 1,
  two = 2,
}

enum AttendanceEnum {
  yes = 1,
  no = 0,
}

type RsvpForm = {
  name: string;
  total: TotalEnum;
  attendance: AttendanceEnum;
};

export const RSVP = () => {
  const { register, handleSubmit, reset, control } = useForm<RsvpForm>({
    defaultValues: { name: getInvitationName() },
  });
  const [attendance, total] = useWatch({
    control,
    name: ['attendance', 'total'],
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmitRsvp: SubmitHandler<RsvpForm> = async data => {
    setSubmitting(true);
    const p = postRsvp({
      name: data.name,
      totalPeople: data.total,
      willAttend: !!Number(data.attendance),
      invitationName: getInvitationName(),
    });
    try {
      await toast.promise(p, {
        loading: 'Mengirim...',
        success: 'Konfirmasi berhasil dikirim',
        error: 'Gagal mengirim konfirmasi',
      });
      reset();
    } catch (e) {
      console.log(e);
    }
    setSubmitting(false);
  };

  const onInvalidRsvp: SubmitErrorHandler<RsvpForm> = ({
    name,
    total,
    attendance,
  }) => {
    let errMsg;
    switch (true) {
      case !!name:
        errMsg = 'Nama';
        break;
      case !!total:
        errMsg = 'Jumlah tamu';
        break;
      case !!attendance:
        errMsg = 'Hadir / Tidak hadir';
        break;
    }
    toast.error(`Mohon isi ${errMsg}`);
  };

  return (
    <SectionContainer className={s.container}>
      <div className={s.frameContainer}>
        <div
          className={s.frameContent}
          {...DEFAULT_AOS}
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <Title className={s.title}>Reservation</Title>
          <p className={s.desc}>
            Kami menantikan kehadiran Bapak / Ibu. Mohon kesediaan Bapak / Ibu
            untuk mengonfirmasi kehadiran guna membantu kami dalam melakukan
            persiapan acara dan memastikan tempat dengan mengisi form
            di&nbsp;bawah&nbsp;ini
          </p>
          <form
            className={s.form}
            onSubmit={handleSubmit(onSubmitRsvp, onInvalidRsvp)}
          >
            <InputField
              {...register('name', {
                required: true,
              })}
              placeholder="Nama"
              readOnly={!!getInvitationName()}
            />
            <SelectField
              {...register('total', { required: true })}
              placeholder="Jumlah tamu undangan"
              options={[
                { label: '0', value: 0 },
                { label: '1', value: 1 },
                { label: '2', value: 2 },
              ]}
              className={classNames(total ? s.filledSelect : s.emptySelect)}
            />
            <SelectField
              {...register('attendance', { required: true })}
              placeholder="Hadir / Tidak hadir"
              options={[
                { label: 'Hadir', value: 1 },
                { label: 'Tidak Hadir', value: 0 },
              ]}
              className={classNames(
                attendance ? s.filledSelect : s.emptySelect,
              )}
            />
            <div className={s.buttonContainer}>
              <Button
                className={s.rsvpButton}
                type="submit"
                disabled={submitting}
              >
                Kirim Konfirmasi
              </Button>
            </div>
          </form>
        </div>
        <AnimationWrapper
          className={s.flowerWrapper}
          data-aos="zoom-in"
          {...DEFAULT_AOS}
          data-aos-delay="600"
        >
          <img src={framePurpleSmall} className={s.framePurpleSmall} />
          <img src={framePurpleBig} className={s.framePurpleBig} />
        </AnimationWrapper>
        <div data-aos="zoom-in-up" {...DEFAULT_AOS}>
          <RsvpFrame className={s.frame} />
        </div>
      </div>
    </SectionContainer>
  );
};
