export const Practice3 = () => {
  const getTotalFee = (num: number): number => {
    return num * 1.1;
  };
  const onClickPractioce = () => {
    let totalFee: number = 0;
    totalFee = getTotalFee(1000);
    console.log(totalFee);
  };

  return (
    <div>
      <p>練習問題3：変数の型指定</p>
      <button onClick={onClickPractioce}>練習問題3を実行</button>
    </div>
  );
};
