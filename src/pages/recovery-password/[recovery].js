import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NewPassword } from 'templates/NewPassword';

const NewPasswordAcount = () => {
  const router = useRouter();
  const [tokenRecovery, setRecoveryToken] = useState(null);

  useEffect(() => {
    const { token } = router.query;
    if (!router.isReady) return;
    // console.log(token);
    setRecoveryToken(token);
  }, [router?.isReady]);

  return <NewPassword tokenRecovery={tokenRecovery} />;
};

export default NewPasswordAcount;
