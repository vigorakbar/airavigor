import { DEFAULT_AOS } from '../../../constants';
import { getWishesPage, postWish } from '../../../utils/api';
import { Wish } from '../../../utils/types';
import { Button } from '../../Button/Button';
import { InputField } from '../../InputField/InputField';
import { SectionContainer } from '../../SectionContainer/SectionContainer';
import { TextAreaField } from '../../TextAreaField/TextAreaField';
import { Title } from '../../Title/Title';
import s from './Wishes.module.scss';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

type WishesInput = {
  name: string;
  wishes: string;
};

export const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [wishPage, setWishPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const [submitting, setSubmitting] = useState(false);

  const fetchAppendWishes = async ({
    page,
    append = true,
  }: {
    page: number;
    append?: boolean;
  }) => {
    try {
      const data = await getWishesPage({ page });
      setWishes(prevWishes =>
        append ? [...prevWishes, ...data.wishes] : data.wishes,
      );
      setHasMore(data.hasMore);
      setWishPage(page + 1);
    } catch (e) {
      console.error('Error: failed to load wishes data', e);
    }
  };

  useEffect(() => {
    fetchAppendWishes({ page: 1, append: false });
  }, []);

  const onSubmitWishes: SubmitHandler<WishesInput> = async data => {
    setSubmitting(true);
    const reqBody = {
      ...data,
      date: new Date().getTime(),
    };
    const p = postWish(reqBody);
    try {
      await toast.promise(p, {
        loading: 'Mengirim...',
        success: 'Pesan berhasil dikirim',
        error: 'Gagal mengirim pesan',
      });
      setWishes(prevWishes => [reqBody, ...prevWishes]);
      reset();
    } catch (e) {
      console.log(e);
    }
    setSubmitting(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<WishesInput>();

  return (
    <SectionContainer>
      <div
        className={s.formAndWishesWrapper}
        data-aos="zoom-in-up"
        {...DEFAULT_AOS}
      >
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
        {!!wishes?.length && (
          <div className={s.wishesContainer}>
            {wishes.map(({ name, wishes, date }, i) => (
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
            {hasMore && (
              <Button
                className={s.wishesButton}
                onClick={() => fetchAppendWishes({ page: wishPage })}
              >
                Show more
              </Button>
            )}
          </div>
        )}
      </div>
    </SectionContainer>
  );
};
