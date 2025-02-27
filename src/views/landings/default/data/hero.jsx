// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>

        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              200web
            </Typography>
          }
          // sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          // icon={
          //   <CardMedia
          //     component="img"
          //     image="/assets/images/point.svg"
          //     sx={{ width: 16, height: 16 }}
          //     alt="celebration"
          //     loading="lazy"
          //   />
          // }
        />
        <Typography variant="caption" sx={{ color: 'text.secondary', ml: 0.75 }}>
            only successful requests
        </Typography>

      </>
    )
  },
  headLine: 'Web Development Studio',
  captionLine: 'Design marketing pages and effectively develop scalable websites for high-impact promotion',
  primaryBtn: { children: 'Connect', href: SECTION_PATH },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React.js' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
