import React, { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Favorite from '@mui/icons-material/Favorite';
import NotificationsNoneOutlined from '@mui/icons-material/NotificationsNoneOutlined';
import { BarChart, IosShare, ModeComment, NotificationAddRounded, NotificationImportant, NotificationsActiveRounded, NotificationsActiveTwoTone, Repeat, TurnedInNot } from '@mui/icons-material';
import { IoNotificationsCircleOutline, IoNotificationsOffCircleOutline } from 'react-icons/io5';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Megusta({ icon, color }) {
  const [isChecked, setIsChecked] = useState(false);

  let selectedIcon = null;

  switch (icon) {
    case 'favorite':
      selectedIcon = isChecked ? <Favorite style={{ color }} /> : <Favorite />;
      break;
    case 'notification':
      selectedIcon = isChecked ? <NotificationsActiveRounded style={{ color }} /> : <NotificationsActiveRounded />;
      break;
    case "repost":
      selectedIcon = isChecked? <Repeat  style={{ color, transform: 'rotate(90deg)' }}/>:<Repeat style={{ transform: 'rotate(90deg)' }} /> ;
      break
      case "comentario":
        selectedIcon = isChecked? <ModeComment  style={{ color, transform: 'scaleX(-1)' }}/>:<ModeComment style={{ transform: 'scaleX(-1)' }} /> ;
        break
        case "alcance":
          selectedIcon = isChecked? <BarChart  style={{ color, transform: 'scaleX(0.5)' }}/>:<BarChart  style={{ transform: 'scaleX(0.5)' }}
          />
         ;
          break;
        case "favorito":
          selectedIcon = isChecked? <TurnedInNot  style={{ color }}/>:<TurnedInNot/>;
          break;
          case "compartir":
          selectedIcon = isChecked? <IosShare  style={{ color }}/>:<IosShare/>;
          break;
      
      default:
      selectedIcon = isChecked ? <Favorite style={{ color }} /> : <Favorite />;
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <Checkbox
        {...label}
        icon={selectedIcon}
        checkedIcon={selectedIcon}
        onChange={handleCheckboxChange}
        checked={isChecked}
      />
    </div>
  );
}
