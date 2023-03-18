import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Line, Circle, Rect, Txt } from '@motion-canvas/2d/lib/components/'
import { createRef  } from '@motion-canvas/core/lib/utils';
import { all } from '@motion-canvas/core/lib/flow';
import { createEaseOutBack } from '@motion-canvas/core/lib/tweening';

export default makeScene2D(function* (view) {
  const line1 = createRef<Line>();
  const line2 = createRef<Line>();
  const line3 = createRef<Line>();
  const line4 = createRef<Line>();
  const line5 = createRef<Line>();
  const letterCirc = createRef<Circle>();

  view.add(
    <Rect
      size = {500}
      fill = {'#ffffff'}
    >
      <Line
        ref = {line1}
        end = {0}
        points = {[[-300,-300],[300,300]]}
        x = {-95.6*2}
        stroke = {'#000000'}
        lineWidth = {8}
      />
      <Line
        ref = {line2}
        end = {0}
        points = {[[300,300],[-300,-300]]}
        x = {-95.6}
        stroke = {'#000000'}
        lineWidth = {17}
      />
      <Line
        ref = {line3}
        end = {0}
        points = {[[-300,-300],[300,300]]}
        stroke = {'#000000'}
        lineWidth = {26}
      />
      <Line
        ref = {line4}
        end = {0}
        points = {[[300,300],[-300,-300]]}
        x = {95.6}
        stroke = {'#000000'}
        lineWidth = {17}
      />
      <Line
        ref = {line5}
        end = {0}
        points = {[[-300,-300],[300,300]]}
        x = {95.6*2}
        stroke = {'#000000'}
        lineWidth = {8}
      />
      <Circle
        ref = {letterCirc}
        size = {326}
        fill = {'#000000'}
        opacity = {0}
        scale = {0}
      >
        <Circle
          size = {300}
          fill = {'#151515'}
          clip
        >
          <Txt
            text={'A'}
            fill = {'#EC0700'}
            fontFamily = {'monospace'}
            fontSize = {400}
            offsetY = {-0.1}
          />
        </Circle>
      </Circle>
    </Rect>
  )

  yield* all(
    line1().end(1,1),
    line2().end(1,1),
    line3().end(1,1),
    line4().end(1,1),
    line5().end(1,1),
  )

  yield* all(
    letterCirc().opacity(1, 0.3),
    letterCirc().scale(1, 1, createEaseOutBack(1)),
  )
});
