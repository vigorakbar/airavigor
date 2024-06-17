import { Button } from '../../Button/Button';
import { InputField } from '../../InputField/InputField';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { TextAreaField } from '../../TextAreaField/TextAreaField';
import { Title } from '../../Title/Title';
import s from './Wishes.module.scss';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type WishesInput = {
  name: string;
  wishes: string;
};

const mockWishes = Array(50)
  .fill([
    { name: 'Vigor', wishes: 'Happy Wedding!', date: 1717125508050 },
    {
      name: 'Aira',
      wishes: 'Happy Wedding. Best Wishes!',
      date: 1716925508050,
    },
  ])
  .flat();

const MAX_PER_LOAD = 10;

export const Wishes = () => {
  // TODO: use actual database
  const [wishes, setWishes] = useState(mockWishes);
  const [maxViewWish, setMaxViewWish] = useState(MAX_PER_LOAD);

  const [submitting, setSubmitting] = useState(false);

  const onSubmitWishes: SubmitHandler<WishesInput> = async data => {
    setSubmitting(true);
    // TODO: handle submit form
    console.log(data);
    const p = new Promise(res =>
      setTimeout(() => {
        setWishes(wishes => [
          { name: data.name, wishes: data.wishes, date: new Date().getTime() },
          ...wishes,
        ]);
        res(1);
      }, 1000),
    );
    await toast.promise(p, {
      loading: 'Mengirim...',
      success: 'Pesan berhasil dikirim',
      error: 'Gagal mengirim pesan',
    });
    reset();
    setSubmitting(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WishesInput>();

  return (
    <SectionContainer className={s.container}>
      <div className={s.formAndWishesWrapper}>
        <Title className={s.title}>Wedding Wishes</Title>
        <form className={s.wishesForm} onSubmit={handleSubmit(onSubmitWishes)}>
          <InputField
            {...register('name', { required: 'Mohon isi nama anda' })}
            placeholder="Nama"
            errorMsg={errors.name?.message}
            containerClassName={s.inputContainer}
          />
          <TextAreaField
            {...register('wishes', { required: 'Mohon isi ucapan anda' })}
            placeholder="Ucapan..."
            errorMsg={errors.wishes?.message}
            containerClassName={s.inputContainer}
          />
          <div className={s.buttonContainer}>
            <Button
              className={s.wishesButton}
              type="submit"
              disabled={submitting}
            >
              Kirim Ucapan
            </Button>
          </div>
        </form>
        <div className={s.wishesContainer}>
          {wishes.slice(0, maxViewWish).map(({ name, wishes, date }, i) => (
            <div className={s.wishesItem} key={i}>
              <div className={s.wishName}>{name}</div>
              <div>{wishes}</div>
              <div className={s.wishDate}>
                {new Intl.DateTimeFormat('en-GB', {
                  dateStyle: 'long',
                  timeStyle: 'short',
                }).format(date)}
              </div>
            </div>
          ))}
          <Button
            className={s.wishesButton}
            onClick={() => setMaxViewWish(n => n + MAX_PER_LOAD)}
          >
            Show more
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};
