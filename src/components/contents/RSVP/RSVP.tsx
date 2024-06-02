import RsvpFrame from '../../../assets/images/rsvp-frame.svg?react';
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
  phone: string;
  total: TotalEnum;
  attendance: AttendanceEnum;
};

export const RSVP = () => {
  const { register, handleSubmit, reset, control } = useForm<RsvpForm>();
  const [attendance, total] = useWatch({
    control,
    name: ['attendance', 'total'],
  });
  const [submitting, setSubmitting] = useState(false);

  const onSubmitRsvp: SubmitHandler<RsvpForm> = async data => {
    setSubmitting(true);
    // TODO: handle submit form
    console.log(data);
    const p = new Promise(res => setTimeout(() => res(1), 1000));
    await toast.promise(p, {
      loading: 'Mengirim...',
      success: 'Konfirmasi berhasil dikirim',
      error: 'Gagal mengirim konfirmasi',
    });
    reset();
    setSubmitting(false);
  };

  const onInvalidRsvp: SubmitErrorHandler<RsvpForm> = ({
    name,
    phone,
    total,
    attendance,
  }) => {
    let errMsg;
    switch (true) {
      case !!name:
        errMsg = 'Nama';
        break;
      case !!phone:
        errMsg = 'Nomor HP';
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
        <div className={s.frameContent}>
          <Title className={s.title}>Reservation</Title>
          <p className={s.desc}>
            Kami menantikan kehadiran Bapak / Ibu. Mohon kesediaan Bapak / Ibu
            untuk mengonfirmasi kehadiran guna membantu kami dalam melakukan
            persiapan acara dan memastikan tempat dengan mengisi form di bawah
            ini
          </p>
          <form
            className={s.form}
            onSubmit={handleSubmit(onSubmitRsvp, onInvalidRsvp)}
          >
            <InputField
              {...register('name', { required: true })}
              placeholder="Nama"
              className={s.rsvpInput}
              containerClassName={s.inputContainer}
            />
            <InputField
              {...register('phone', { required: true })}
              placeholder="Nomor HP"
              className={s.rsvpInput}
              containerClassName={s.inputContainer}
            />
            <SelectField
              {...register('total', { required: true })}
              placeholder="Jumlah tamu undangan"
              options={[
                { label: '1', value: 1 },
                { label: '2', value: 2 },
              ]}
              containerClassName={s.inputContainer}
              className={classNames(total ? s.filledSelect : s.emptySelect)}
            />
            <SelectField
              {...register('attendance', { required: true })}
              placeholder="Hadir / Tidak hadir"
              options={[
                { label: 'Hadir', value: 1 },
                { label: 'Tidak Hadir', value: 0 },
              ]}
              containerClassName={s.inputContainer}
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
                Send Confirmation
              </Button>
            </div>
          </form>
        </div>
        <RsvpFrame className={s.frame} />
      </div>
    </SectionContainer>
  );
};
