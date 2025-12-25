export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    alert(`合計金額は${num * 1.1}円です`);
  };
  const onClickPractioce = () => {
    calcTotalFee(1000);
  };

  return (
    <div>
      <p>練習問題1：引数の型指定</p>
      <button onClick={onClickPractioce}>練習問題1を実行</button>
    </div>
  );
};
