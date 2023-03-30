import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Line, Circle, Rect, Txt, Shape  } from '@motion-canvas/2d/lib/components/'
import { createRef, Reference  } from '@motion-canvas/core/lib/utils';
import { all, delay, sequence, waitFor } from '@motion-canvas/core/lib/flow';
import { createEaseInBack, createEaseOutBack, easeInCubic, easeOutCubic } from '@motion-canvas/core/lib/tweening';

export default makeScene2D(function* (view) {
  const lineStyle = {
    lineWidth: 45,
    end: 0,
    lineCap: 'round',
    opacity: 0
  };

  const vrtLine = createRef<Line>();
  const hrzLine = createRef<Line>();
  const blueLine = createRef<Line>();
  const hrzCirc = createRef<Circle>();
  const vrtCirc = createRef<Circle>();
  const textT = createRef<Circle>();

  view.add(
    <Rect scale={0.625} fill={'#0F0F0F'} size={800}>
      <Line ref={vrtLine} {...lineStyle} stroke={'#242424'} points={[0,[0,500]]} />
      <Line ref={hrzLine} {...lineStyle} stroke={'#242424'} points={[0,[500,0]]} />
      <Circle ref={hrzCirc} size={40} fill={'#505050'} x={530}/>
      <Circle ref={vrtCirc} size={40} fill={'#505050'} y={530}/>
      <Line ref={blueLine} {...lineStyle} stroke={'#2196F3'} points={[-500,0]} />

      <Circle ref={textT} scale={0} opacity={0} size={492} fill={'#0F0F0F'} stroke={'#2196F3'} lineWidth={45} >
        <Txt y={20} fontFamily={'Inter'} text={'T'} fontSize={320} fill={'#D6D6D6'} fontWeight={500} lineHeight={387.27} />
      </Circle>
    </Rect>
  );

  function *spawnShape<T extends Shape>(shapeRef: Reference<T>, scaleRef: number) 
  {
    yield *all(
      shapeRef().opacity(1, 0.8),
      shapeRef().scale(scaleRef, 1, createEaseOutBack(1)),
    )
  }

  yield* all(
    blueLine().opacity(1,0.4),
    blueLine().end(1,0.8,easeInCubic),
  )

  hrzLine().opacity(1)
  vrtLine().opacity(1)

  yield* all(
    hrzLine().end(1,0.8,easeOutCubic),
    vrtLine().end(1,0.8,easeOutCubic),
  )

  // yield* all(
  //   hrzCirc().position.x(0,0.4),
  //   vrtCirc().position.y(0,0.4),
  // )

  yield* spawnShape(textT,1)
});