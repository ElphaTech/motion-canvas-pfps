import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Line, Circle, Rect  } from '@motion-canvas/2d/lib/components/'
import { createRef  } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';

export default makeScene2D(function* (view) {
  const mouth = createRef<Line>();
  const leftEye = createRef<Circle>();
  const leftEyeCover = createRef<Circle>();
  const rightEye = createRef<Circle>();
  const rightEyeCover = createRef<Circle>();

  view.add(
    <Rect
      size = {500}
      fill = {'#2D2F31'}
    >
      <Line
        ref = {mouth}
        points = {[[-91.9,0],[91.9,0]]}
        y = {300}
        stroke = {'#FCFEFF'}
        lineWidth = {29.4}
      />
      <Circle
        ref = {leftEye}
        size = {58.8}
        fill = {'#FCFEFF'}
        x = {-176}
      >
        <Circle
          ref = {leftEyeCover}
          size = {70}
          fill = {'#2D2F31'}
        />
      </Circle>

      <Circle
        ref = {rightEye}
        size = {58.8}
        fill = {'#FCFEFF'}
        x = {176}
      >
        <Circle
          ref = {rightEyeCover}
          size = {70}
          fill = {'#2D2F31'}
        />
      </Circle>
    </Rect>
  )

  yield* mouth().position.y(117.6,0.5);

  yield* all(
    leftEyeCover().position.y(70,1),
    rightEyeCover().position.y(70,1),
  );
});