import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Node, Line, Circle, Rect, Shape, Txt } from '@motion-canvas/2d/lib/components/'
import { createRef, useDuration, Reference } from '@motion-canvas/core/lib/utils';
import { all, waitUntil, waitFor, sequence, delay } from '@motion-canvas/core/lib/flow';
import { createEaseOutBack, createEaseInOutBack, createEaseInBack } from '@motion-canvas/core/lib/tweening';
import { CodeBlock, insert } from '@motion-canvas/2d/lib/components/CodeBlock';
import { BBox } from '@motion-canvas/core/lib/types';
import { Gradient } from '@motion-canvas/2d/lib/partials';

export default makeScene2D(function* (view) {
  const blackbox = createRef<Rect>();
  const backLine = createRef<Line>();
  const whiteLine = createRef<Line>();

  const gradient = new Gradient({
    type: 'linear',
    fromY: -250,
    toY: 250,
    toRadius: 320,
    stops: [
      {offset: 0, color: '#004cff'},
      {offset: 1, color: '#0032a8'},
    ],
  });

  view.add(
    <Rect size={510} fill={'#000000'}>
      <Line stroke={'#000000'} lineWidth={17.5} clip
      points={[[-280,-280],[109.6,-280],[109.6,-39.4],[4.3,39.4],[-144.7,-30.7],[-144.7,280],[-280,280]]}>
        <Rect ref={blackbox} size={500} fill={gradient} x={400}/>
        <Line ref={whiteLine} stroke={'#ffffff'} lineWidth={17.5} end={0}
        points={[[-280,-280],[109.6,-280],[109.6,-39.4],[4.3,39.4],[-144.7,-30.7],[-144.7,280],[-280,280]]}/>
      </Line>
    </Rect>
  )

  yield* whiteLine().end(1,1)

  yield* blackbox().position.x(0,1)

  yield* waitFor(1)
});