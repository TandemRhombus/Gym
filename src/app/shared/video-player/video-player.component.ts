import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent {
  @Input() videoUrl!: string;
  @Input() title: string = 'Video';

  play() {
    const video: HTMLVideoElement | null = document.querySelector('video');
    video?.play();
  }

  pause() {
    const video: HTMLVideoElement | null = document.querySelector('video');
    video?.pause();
  }
}