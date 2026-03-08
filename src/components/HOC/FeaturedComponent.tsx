type PropsType = {
  name: string;
  age: number;
};

export function OrdinaryComponent(props: PropsType) {
  return (
    <h1>
      Ordinary Component with name: {props.name} and age: {props.age}
    </h1>
  );
}

export function FeaturedComponent(
  OrdinaryComponent: React.ComponentType<PropsType>,
) {
  return (props: PropsType) => {
    return (
      <>
        <div>Additional feature</div>
        <OrdinaryComponent {...props} />
      </>
    );
  };
}
