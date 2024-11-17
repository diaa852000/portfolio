import { gridItems } from "@/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export default function Grid() {
    return (
        <section id="about">
            <BentoGrid>
                {gridItems.map(({id, description, img, imgClassName, className, spareImg, title, titleClassName}) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        description={description}
                        title={title}
                        className={className}
                        img={img}
                        imgClassName={imgClassName}
                        spareImg={spareImg}
                        titleClassName={titleClassName}
                    />
                ))}
            </BentoGrid>
        </section>
    )
}
